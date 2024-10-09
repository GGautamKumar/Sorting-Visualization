let arr = [50,40,30,20,10,60,80,5];
let parentDiv = document.getElementsByClassName('parentDiv');
let btn=document.getElementsByClassName('startbtn');
let rbtn=document.getElementsByClassName('resetbtn');

let i=0;
arr.forEach(e=>{
    let innerDiv=document.createElement('div');
    innerDiv.style.height=(e*5+'px');
    innerDiv.style.backgroundColor=randColor();
    innerDiv.style.width=50+'px';
    innerDiv.style.marginLeft=10+'px';
    
    innerDiv.setAttribute('id','elem'+i);
    i++;
    innerDiv.classList.add("innerDiv"); 
    parentDiv[0].appendChild(innerDiv)
}) 

function randColor(){
    return "#"+(Math.random()*0xFFFFFF<<0).toString(16);
}

btn[0].addEventListener("click",()=>{
    let a=document.getElementById("sort_name").value;
    switch (a) {
        case '1':
            BubbleSort(arr);
            break;
        case '2':
            SelectionSort(arr);
            break;
        case '3':
            InsertionSort(arr);
                break;
        case '4':
            let l=0;
            let r=arr.length-1;
            QuickSort(arr,l,r);
            break;
        default:
            break;
    }
});



/*--------------Sleep--------------------*/
const sleep=(time)=>{
    return new Promise(resolve=>setTimeout(resolve,time))
}


/*---------------Bubble sort--------------*/
async function BubbleSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<(arr.length -i -1);j++)
        {
            await sleep(500);  
            if(arr[j]>arr[j+1])
            {
                swapNumber(arr,j,j+1)
                swapColorHeight(j,j+1);
            }
        }
    }
}

/*--------------Selection sort----------------*/
async function SelectionSort(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        let pos=i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[pos]>arr[j])
            {
                pos=j;
            }
        }
        await sleep(1000);
        swapNumber(arr,i,pos);
        swapColorHeight(i,pos);
    }
}


/*----------------Insertion sort----------------------*/
async function InsertionSort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        for(let j=i-1;j>=0&&arr[j]>arr[j+1];j--)
        {
            await sleep(500);
            swapNumber(arr,j,j+1);
            swapColorHeight(j,j+1);
        }
    }
}

/*-------------------Quick sort--------------------------*/
async function QuickSort(arr,l,r)
{
    if(l<r)
    {
let p=partion(arr,l,r);
QuickSort(arr,l,p-1);
QuickSort(arr,p+1,r);
    }
}

function partion(arr,l,r)
{
    let a=arr[l];
    let i=l;
    let j=r+1;
    while(l)
    {
        do{
            i++;
        }while(arr[i]<=a&&i<=r);
        do{
            j--;
        }while(arr[j]>a);
        if(i>=j)
        break;
        //sleep(500);
        swapNumber(arr,i,j);
        swapColorHeight(i,j);
    }
    //sleep(500);
    swapNumber(arr,l,j);
    swapColorHeight(l,j);
    return j;
}


/*--------------------swap two number----------------------*/
function swapNumber(arr,x,y)
{
    let temp=arr[x]
    arr[x]=arr[y]
    arr[y]=temp 
}

/*---------------------swap two colors with height------------*/
function swapColorHeight(x,y){
    let a='elem'+x;
    let b='elem'+y;
    let e1=document.getElementById(a);
    let e2=document.getElementById(b);
    let bg1=e1.style.backgroundColor;
    let bg2=e2.style.backgroundColor;
    let h1=e1.clientHeight;
    let h2=e2.clientHeight;
    e1.style.backgroundColor=bg2;
    e2.style.backgroundColor=bg1;
    e1.style.height=h2+"px";
    e2.style.height=h1+"px";

}