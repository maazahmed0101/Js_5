// quection--1
let okk = [[],[],[]]
quection===2
let ok1 = [0,1,2,3]
let ok2 = [1,0,1,2]
let ok3 = [2,1,0,1]
console.log(ok1,ok2,ok3)
for(let i = 1;i<=10;i++){
    console.log(i)
}
let num = +prompt('enter your faverit number')
for(let i = 1;i<=10;i++){
    console.log(num+"*"+i+"="+num*i)
}
let num2 = +prompt('enter table');
let num3 = +prompt('enter table length')
for(let i = 1;i<=num3;i++){
    console.log(num2+'*'+i+'='+num2*i)
}
// quection--6
for(let i = 1;i<=15;i++){
    console.log(i)
}
for( i = 10;i>=1;i--){
    console.log(i)
}
for(let i = 2;i<=20;i+=2){
    console.log(i)
}
for(let i = 1;i<=20;i+=2){
    console.log(i)
}

for(let i = 2;i<=20;i=i+2){
    console.log(i+'k')
}

let fruit = ['apple','mango','banana','orange']
for(let ok of fruit){
    console.log(ok)
}
// quection --5
let a = ['apple','mango','banana','orange'];
for(let b of a){
    console.log(a)
}  
// quection--7
let Aa = ['apple','mango','banana'];
let  search= 'mango';
if(A.includes(search)){
    console.log('ok')
}

let Aj = [234,123,123,13];
let sabseBadaa =A[0]
for(let i = 0;i<A.length;i++){
    if(A[i]>sabseBada){
       sabseBada=A[i]
    console.log(sabseBada)

    }
}

let AA = [234,12,123,13];
let sabsebada = A[0]

for(let i =0;i<A.length;i++){
    if(A[i]>sabsebada){
        sabsebada=A[i]
        console.log(sabsebada)
    }
}



// next quection
let B = [12,23,43,54];
let ok = B[0]
for(let i = 0;i>B.length;i++){
   if(B[i]>ok){
    ok=B[i]
    console.log(ok)
   }
}
// // quection---10
for( i = 1;i<=20;i++){
    console.log(i*5)
}


let A = [90, 53, 78, 91, 152];

// 2. پہلے نمبر کو بڑا مان لیں
let sabseBada = A[0];

// 3. لسٹ کے ہر نمبر کو باری باری چیک کریں
for (let i = 0; i < A.length; i++) {
    if (A[i] < sabseBada) {
        sabseBada = A[i]; // اگر کوئی نمبر بڑا ملا تو اسے 'sabseBada' میں ڈال دیں
        
    }
}

console.log(sabseBada)