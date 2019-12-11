//第一題
function reverseWord (str) {
    var reversed = '';
    var num = str.length
    for (var i = num-1; i >= 0; i--) 
    {
        reversed += str[i]
    }
    return reversed
}
//第二題
function find(num){
    for (var i =0;i<num;i++)
    {
        if(num%3==0||num%5==0){
            print("");
            if (num%3==0 && num%5==0){
                print(num);
            }
        }
        else{
            print(num);
        }
    }
}

//第三題
//假設三個不透明的袋子裝的比數量一樣多
//並且推論鉛筆的重量較原子筆輕
//將三個袋子的重量分別比較選擇最輕的袋子
//若最輕的袋子中拿出的筆確實為鉛筆
//則中間重量的袋子則為混和
//最重的袋子是原子筆


//第四題
//原先金額為900元
//服務生退費90元給三位顧客
//故三位顧客實支金額僅為810元
//服務生暗扛60元
//750元加上60元為810元
//故此問題僅僅是文字敘述的迷思
//沒有注意到實支金額已經減少，
//而是依然用原先的900元去計算就會產生誤差
//而實際上的金額是沒有損失的