function print(tx,ty,dx,dy){
    if(tx===dx){
        for(var i=ty;i<=dy;i++){
            arr[tx][i]=num++;
        }
    }else if(ty===dy){
        for(var i=tx;i<=dx;i++){
            arr[i][ty]=num++
        }
    }else{
        var curx=tx,
            cury=ty;
        while(cury!=dy){
            arr[tx][cury]=num++;
            cury++;
        }
        while(curx!=dx){
            arr[curx][dy]=num++;
            curx++;
        }
        while(cury!=ty){
            
            console.log(cury);
            console.log(num);
            arr[dx][cury]=num++;
            cury--;
        }
        while(curx!=tx){
            arr[curx][ty]=num++;
            curx--;
        }
    }    
}
var num=1,
    tx=0,
    ty=0,
    dx=2,
    dy=2;
var arr=[];
for(var i=0;i<3;i++){
    arr[i]=[];
}

while(tx<=dx&&ty<=dy){
    print(tx++,ty++,dx--,dy--);
}

console.log(arr);

