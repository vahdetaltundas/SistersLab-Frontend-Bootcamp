let a = 2;
let b = 3;
let c = 2;
(a == b) // returns ? a ve b değişkenlerindeki değerler birbirine eşit olmadığı için false döner
(a == c) //returns ? a ve c değişkenlerindeki değerler birbirine eşit olduğu için true döner

typeof "John Doe" // Returns ? Değişkenin tipi String dir
typeof 3.14 // Returns ? Değişkenin tipi Number dır 
typeof true // Returns ? Değişkenin tipi Boolean dır 
typeof 234567890123456789012345678901234567890n // Returns ? Değişkenin tipi bigint dır 
typeof undefined // Returns ? Değişkenin tipi undefined dır 
typeof null // Returns ? Değişkenin tipi object dir (null, herhangi bir nesne türü değildir null bir değerin atanmadığını veya varlığını kaybettiğini göstermek için kullanılır object olarak dönmesinin sebebi JavaScript'in tarihsel kökenlerinden kaynaklanır ve bu bir hata değil, bir dil özelliğidir uyumluluk nedenleriyle değiştirilmemiştir.)
typeof Symbol('symbol') // Returns ? Değişkenin tipi symbol dür (Symbol komutu ile tip doğrulama yapıldığı için symbol döner aksi halde değeri String dir)

let x = 2;
let y = "2";
(x == y) // Returns ? x ve y nin değerleri aynı olduğu için true döner
(x === y) // Returns ? x ve y nin değerleri aynı olsa bile "===" operasyonu değer ve tip doğrulama yaptığı için false döner

let x = 3;
let y = "3";
x + y // Returns ? 33 döner bunun sebebi string bir değerle toplama yapmak yan yana yazdırmayı sağlar

let x = 24;
let y = "Hello";
x + y // Returns "? 24Hello döner bunun sebebi string bir değerle toplama yapmak yan yana yazdırmayı sağlar

let name = "Vivek";
let surname = " Bisht";
name + surname // Returns ? Vivek Bisht döner bunun sebebi string bir değerle toplama yapmak yan yana yazdırmayı sağlar

let x = 3;
let y = "3";
x - y //Returns ? 0 döner bunun sebebi javascriptin özelliği "-"" operatörü değer olarak sayısal olan 2 değişkeni tipleri farklı olsada matematiksel işlem yapabilir

let x = 0;
let y = 23;

if(x) { console.log(x) } //Returns ? consola birşey yazdırmaz bunun sebebi sorgu komutlarında "0" false denk geldiği için

if(y) { console.log(y) } //Returns ? consola 23 yazdırır bunun sebebi sorgu ifadesinin içinde değer var bu sebepten true algılar

isNaN("Hello") // Returns ? "Hello" değeri Number olmadığı için True döner
isNaN(345) // Returns ? 345 değeri Number olduğu için False döner
isNaN('1') // Returns ? "1" değeri ne kadar sayı olsada tipi String olduğu için True döner
isNaN(true) // Returns ? true ifadesi sayısalda Number olan 1 denk geldiği için false döner
isNaN(false) // Returns ? false ifadesi sayısalda Number olan 0 denk geldiği için false döner
isNaN(undefined) // Returns ? undefined ifadesinin tipide undefined olduğu ne sayı olmadığı için true döner