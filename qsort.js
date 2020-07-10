function qsrt(arr)
{
    if (arr.length === 0)
    {
        return []; 
    }
    var a = [], b = [], x = arr[0];
    for (var i = 1; i < arr.length; i++)
     {
         if (arr[ i ] < x) 
         {
             a[a.length] = arr[ i ];
         }     
         else 
         {
             b[b.length] = arr[ i ];
         }     
     }
    return qsrt(a).concat( x,qsrt(b) );
}
var mas = [-4, 42, 0, 96, 28008, -360, 1337, 7172, 0, -473];
alert( qsrt(mas) );
