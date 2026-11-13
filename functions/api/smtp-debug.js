import { connect } from 'cloudflare:sockets';

const json = (o,s=200)=>new Response(JSON.stringify(o),{status:s,headers:{'content-type':'application/json'}});

function readerFor(socket){
  const reader=socket.readable.getReader(); const dec=new TextDecoder();
  return async (timeout=8000)=>{
    let buf=''; const end=Date.now()+timeout;
    while(Date.now()<end){
      const res=await Promise.race([reader.read(),new Promise((_,rej)=>setTimeout(()=>rej(new Error('read_timeout')),Math.max(1,end-Date.now())))]);
      if(res.done) break;
      buf+=dec.decode(res.value,{stream:true});
      if(/(^|\r?\n)\d{3} /.test(buf)) return buf;
    }
    throw new Error('read_timeout');
  };
}

export async function onRequestGet(){
  let socket;
  const out=[];
  try{
    socket=connect({hostname:'smtp.mail.me.com',port:587},{secureTransport:'starttls'});
    let read=readerFor(socket); let writer=socket.writable.getWriter();
    out.push(['greet', (await read()).slice(0,80)]);
    await writer.write(new TextEncoder().encode('EHLO jakubdigital.cz\r\n')); out.push(['ehlo1',(await read()).slice(0,80)]);
    await writer.write(new TextEncoder().encode('STARTTLS\r\n')); out.push(['starttls',(await read()).slice(0,80)]);
    try{ reader=null; await writer.close(); }catch{}
    socket=socket.startTls();
    read=readerFor(socket); writer=socket.writable.getWriter();
    await writer.write(new TextEncoder().encode('EHLO jakubdigital.cz\r\n')); out.push(['ehlo2',(await read()).slice(0,120)]);
    try{ await writer.close(); }catch{}
    try{ await socket.close(); }catch{}
    return json({ok:true,out});
  }catch(e){
    try{socket&&socket.close()}catch{}
    return json({ok:false,error:String(e&&e.message||e),out},500);
  }
}
