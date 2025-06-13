export default function Scoping(){
    if(true){
        var a = 10;
        let b = 20;
        const c = 30;
        console.log("Inside if: ", a, b, c);
    }

}