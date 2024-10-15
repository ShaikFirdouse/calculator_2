function display(val){
    let d= document.getElementById('result');
    d.value=d.value+val
}
function Clear(){
    window.location="index.html"
}
function Result(){
    let inp=document.getElementById('result')
      let res=inp.value;

        try{
            inp.value = eval(res);
        }catch(error){
            inp.value='Error';
        }
}
function del(){
    let display=document.getElementById('result');
    display.value=display.value.slice(0, -1);
}
