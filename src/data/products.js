const P=(name,price,unit,color,shape,desc)=>({name,price,unit,color,shape,desc});
export const DEPTS=[
{id:'fruits',name:'FRUITS & VEGETABLES',color:'#2f9e44',items:[
P('Apple',120,'kg',0xe03131,'sphere','Fresh red apples'),P('Banana',60,'dozen',0xf5d33f,'cyl','Ripe sweet bananas'),
P('Orange',80,'kg',0xff922b,'sphere','Juicy Nagpur oranges'),P('Tomato',40,'kg',0xc92a2a,'sphere','Farm tomatoes'),
P('Potato',30,'kg',0xb08968,'sphere','Everyday potatoes'),P('Carrot',50,'kg',0xf76707,'cyl','Crunchy carrots')]},
{id:'grocery',name:'GROCERY',color:'#e8590c',items:[
P('Rice',90,'kg',0xf1f3f5,'box','Premium basmati rice'),P('Wheat',45,'kg',0xe9c46a,'box','Whole wheat atta'),
P('Pasta',70,'pack',0xffd43b,'box','Durum wheat pasta'),P('Cooking Oil',180,'litre',0xfab005,'cyl','Refined sunflower oil'),
P('Sugar',48,'kg',0xffffff,'box','Fine white sugar'),P('Biscuits',30,'pack',0x8d5524,'box','Crunchy butter biscuits')]},
{id:'beverages',name:'BEVERAGES',color:'#1c7ed6',items:[
P('Water',20,'bottle',0x74c0fc,'cyl','Mineral water 1L'),P('Cola',45,'can',0xc92a2a,'cyl','Chilled cola'),
P('Juice',99,'carton',0xff922b,'box','Mixed fruit juice'),P('Energy Drink',125,'can',0x40c057,'cyl','Boost your day'),
P('Coffee',320,'jar',0x5c3d2e,'cyl','Instant coffee'),P('Tea',210,'pack',0x2b8a3e,'box','Assam tea leaves')]},
{id:'bakery',name:'BAKERY',color:'#d9480f',items:[
P('Bread',50,'loaf',0xd9a066,'box','Fresh sandwich bread'),P('Croissant',65,'piece',0xe8a33d,'cyl','Buttery croissant'),
P('Cake',450,'each',0xf783ac,'cyl','Chocolate cake'),P('Donut',55,'piece',0xff8787,'cyl','Glazed donut'),
P('Muffin',60,'piece',0x8d5524,'cyl','Blueberry muffin'),P('Cupcake',45,'piece',0xfcc2d7,'cyl','Vanilla cupcake')]},
{id:'electronics',name:'ELECTRONICS',color:'#7048e8',items:[
P('Headphones',2499,'pair',0x212529,'box','Wireless over-ear'),P('Smartwatch',3999,'piece',0x364fc7,'box','Fitness tracking watch'),
P('Bluetooth Speaker',1799,'piece',0x1c7ed6,'cyl','Portable bass speaker'),P('Keyboard',999,'piece',0x495057,'box','Slim keyboard'),
P('Mouse',499,'piece',0x868e96,'box','Wireless mouse'),P('Power Bank',1299,'piece',0x12b886,'box','20000 mAh power bank')]},
{id:'household',name:'HOUSEHOLD',color:'#0c8599',items:[
P('Detergent',250,'pack',0x228be6,'box','Powerful stain remover'),P('Soap',35,'bar',0xfcc2d7,'box','Moisturising soap'),
P('Shampoo',185,'bottle',0x7950f2,'cyl','Silky smooth shampoo'),P('Cleaning Spray',140,'bottle',0x20c997,'cyl','Multi-surface cleaner'),
P('Tissues',60,'box',0xe7f5ff,'box','Soft facial tissues'),P('Sponge',25,'pack',0xfab005,'box','Scrub sponge')]}];
