import{_ as b,z as y,r as n,c as i,a as l,b as u,w as p,u as c,t as I,e as g,f as w,E as r,o as f,h as x,p as E,n as N,q as S}from"./index-DGcrJ-bL.js";const B={class:"container"},C={class:"upload-section"},F={key:0,class:"uploaded-file"},U={__name:"AddClinrecSQL",setup(V){const a=y(),d=n([]),t=n(""),m=n(""),_=s=>{},v=async s=>{try{const e=new FormData;e.append("firstname",a.userInfo.firstname),e.append("lastname",a.userInfo.lastname),e.append("middlename",a.userInfo.middlename),e.append("fullname",a.userInfo.fullname),e.append("email",a.userInfo.email),e.append("file",s.file);const o=await w.uploadFile(e);r.success("Файл успешно загружен"),o.data&&o.data.url&&(m.value=o.data.url,t.value=s.file.name,d.value=[{name:s.file.name}],r.success("Файл успешно загружен!"))}catch(e){console.error("Ошибка загрузки файла:",e),r.error("Ошибка при загрузке файла!")}};return(s,e)=>(f(),i("div",B,[e[2]||(e[2]=l("img",{src:x,alt:"Логотип",class:"logo"},null,-1)),e[3]||(e[3]=l("h1",{class:"title"},"Загрузка самостоятельных работ",-1)),l("div",C,[e[1]||(e[1]=l("label",{for:"sqlite-upload",class:"upload-label"},"Загрузите файл",-1)),u(c(S),{class:"upload-btn","http-request":v,"before-upload":_,"file-list":d.value,multiple:"false","show-file-list":""},{default:p(()=>[u(c(E),{type:"primary",class:"upload-button"},{default:p(()=>e[0]||(e[0]=[N("Загрузить")])),_:1})]),_:1},8,["file-list"]),t.value?(f(),i("div",F," Загруженный файл: "+I(t.value),1)):g("",!0)])]))}},q=b(U,[["__scopeId","data-v-8da8fe21"]]);export{q as default};
