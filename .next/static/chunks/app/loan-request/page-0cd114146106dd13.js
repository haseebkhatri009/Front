(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{5937:(e,a,r)=>{Promise.resolve().then(r.bind(r,7798))},7798:(e,a,r)=>{"use strict";r.d(a,{default:()=>o});var l=r(5155),n=r(2115);let o=()=>{let[e,a]=(0,n.useState)({name:"",email:"",phone:"",cnic:"",address:"",loanAmount:"",loanCategory:"",guarantors:[{name:"",email:"",cnic:"",location:""},{name:"",email:"",cnic:"",location:""}]}),r=e=>{let{name:r,value:l}=e.target;a(e=>({...e,[r]:l}))},o=(r,l)=>{let{name:n,value:o}=l.target,d=[...e.guarantors];d[r][n]=o,a(e=>({...e,guarantors:d}))};return(0,l.jsx)("section",{className:"py-12",children:(0,l.jsxs)("div",{className:"container mx-auto text-center",children:[(0,l.jsx)("h2",{className:"text-2xl font-semibold mb-6",children:"Loan Request Form"}),(0,l.jsxs)("form",{onSubmit:a=>{a.preventDefault(),console.log("Loan Request Submitted:",e)},className:"space-y-4",children:[(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"text",name:"name",value:e.name,onChange:r,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Full Name",required:!0})}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"email",name:"email",value:e.email,onChange:r,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Email",required:!0})}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"text",name:"phone",value:e.phone,onChange:r,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Phone Number",required:!0})}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"text",name:"cnic",value:e.cnic,onChange:r,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"CNIC",required:!0})}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"text",name:"address",value:e.address,onChange:r,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Address",required:!0})}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"number",name:"loanAmount",value:e.loanAmount,onChange:r,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Loan Amount",required:!0})}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"text",name:"loanCategory",value:e.loanCategory,onChange:r,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Loan Category",required:!0})}),e.guarantors.map((e,a)=>(0,l.jsxs)("div",{className:"border-t pt-4",children:[(0,l.jsxs)("h3",{className:"text-lg font-semibold",children:["Guarantor ",a+1]}),(0,l.jsx)("input",{type:"text",name:"name",value:e.name,onChange:e=>o(a,e),className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Guarantor Name",required:!0}),(0,l.jsx)("input",{type:"email",name:"email",value:e.email,onChange:e=>o(a,e),className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Guarantor Email",required:!0}),(0,l.jsx)("input",{type:"text",name:"cnic",value:e.cnic,onChange:e=>o(a,e),className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Guarantor CNIC",required:!0}),(0,l.jsx)("input",{type:"text",name:"location",value:e.location,onChange:e=>o(a,e),className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Guarantor Location",required:!0})]},a)),(0,l.jsx)("div",{children:(0,l.jsx)("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300",children:"Submit Request"})})]})]})})}}},e=>{var a=a=>e(e.s=a);e.O(0,[441,517,358],()=>a(5937)),_N_E=e.O()}]);