const display1_el  = document.querySelector(".display1");
const display2_el  = document.querySelector(".display2");
const limparTudo_el         = document.querySelector(".limparTudo")
const limparUltimo_el        = document.querySelector(".limparUltimo")
const numeros_el   = document.querySelectorAll(".numero");
const operacao_el = document.querySelectorAll(".operacao");
const igual_el     = document.querySelector(".igual");

let dis1Num        = '';
let dis2Num        = '';
let resultado      = null;
let ultimaOperacao = '';
let temPonto       = false;

numeros_el.forEach((numero) => {
    numero.addEventListener('click', (e) => {
      if (e.target.innerText === '.' && !temPonto) {
        temPonto = true;
      } else if (e.target.innerText === '.' && temPonto) {
        return;
      }
      dis2Num += e.target.innerText;
      display2_el.innerText = dis2Num;
      console.log()
    });
  });

operacao_el.forEach(operacao =>{
    operacao.addEventListener('click', (e)=>{
        if(!dis2Num) return; 
        temPonto = false;
        const nomeOperacao = e.target.innerText;
        if(dis1Num && dis2Num && ultimaOperacao){
        operacaoMat()
        }else{
            resultado = parseFloat(dis2Num)
        }
        limparVar(nomeOperacao)
        ultimaOperacao = nomeOperacao;
        console.log(resultado)
    })
})

function limparVar(nome = ''){
    dis1Num += dis2Num + ' ' +  nome + ' ';
    display1_el.innerText = dis1Num 
    display2_el.innerText = '';
    dis2Num = '';
}

function operacaoMat(){
    if(ultimaOperacao === 'x'){
        resultado = parseFloat(resultado) * parseFloat(dis2Num);
    }else if (ultimaOperacao === '+'){
        resultado = parseFloat(resultado) + parseFloat(dis2Num);
    }else if (ultimaOperacao === '-'){
        resultado = parseFloat(resultado) - parseFloat(dis2Num);
    }else if (ultimaOperacao === '÷'){
        resultado = parseFloat(resultado) / parseFloat(dis2Num);
    }else if (ultimaOperacao === '%'){
        resultado = parseFloat(resultado) % parseFloat(dis2Num);
    }
}

igual_el.addEventListener('click', (e) =>{
    if(!dis1Num || !dis2Num) return;
    temPonto = false;
    operacaoMat();
    limparVar()
    display2_el.innerText = resultado;
    dis2Num = resultado;
    dis1Num = '';
})

limparTudo_el.addEventListener('click', (e) =>{
    display1_el.innerText = '';
    display2_el.innerText = '';
    dis1Num = '';
    dis2Num = '';
})

limparUltimo_el.addEventListener('click', (e) =>{
    display2_el.innerText = '';
    dis2Num = '';
})

window.addEventListener('keydown', (e) => {
    if(
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "." 
    ){
        apertarBotaoEl(e.key);
    }else if(
        e.key === "+" ||
        e.key === "-" ||
        e.key === "%" 
    ){
        apertarOperacao(e.key);
    }else if(
        e.key === "*"
    ){
        apertarOperacao('x');
    }else if (
        e.key === "/"
    ){
        apertarOperacao('÷');   
    }else if (
        e.key === 'Enter' ||
        e.key === "="
    ){
        apertarIgual();
    }
})

function apertarBotaoEl(key){
    numeros_el.forEach(botao =>{
        if(botao.innerText === key){
            botao.click();  
        }
    })
}

function apertarOperacao(key){
    operacao_el.forEach(botao =>{
        if(botao.innerText ===  key){
            botao.click();
        }
    })
}

function apertarIgual(key){
    igual_el.click()
}