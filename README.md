1️⃣ What is the difference between var, let, and const?
Answer: JavaScript এ var, let, এবং const দিয়ে variable declare করা হয়, কিন্তু এদের scope এবং reassignment behaviour আলাদা।”
var → এটা function-scoped এবং একই variable redeclare ও reassign করা যায়। এজন্য অনেক সময় unexpected bug হতে পারে।
let → এটা block-scoped ( { } এর ভিতরে কাজ করে )। এটা reassign করা যায়, কিন্তু একই scope এ redeclare করা যায় না।
const → এটাও block-scoped, কিন্তু declare করার পরে value change করা যায় না।
Modern JavaScript এ সাধারণত const বেশি ব্যবহার করা হয়, আর value change করতে হলে let ব্যবহার করা হয়।

2️⃣ What is the spread operator (...)?
Answer: Spread operator (...) JavaScript এ array বা object এর elements গুলোকে expand বা আলাদা করে বের করার জন্য ব্যবহার করা হয়। এটা সাধারণত array বা object copy করা, merge করা বা নতুন data add করার সময় ব্যবহার করা হয়।

3️⃣ What is the difference between map(), filter(), and forEach()?
Answer: map(), filter(), এবং forEach() — এই তিনটা JavaScript array method, কিন্তু এদের কাজ আলাদা।”
map() → array এর প্রতিটি element এর উপর কাজ করে এবং নতুন একটি array return করে। সাধারণত data transform করার জন্য ব্যবহার করা হয়।
filter() → condition অনুযায়ী element select করে এবং যেগুলো condition match করে সেগুলো নিয়ে নতুন array return করে।
forEach() → array এর প্রতিটি element এর উপর loop চালায়, কিন্তু কোনো নতুন array return করে না।

4️⃣ What is an arrow function?
Answer: Arrow function হলো JavaScript এর একটি short syntax দিয়ে function লেখার পদ্ধতি, যেটা ES6 এ এসেছে। এটা সাধারণ function এর মতোই কাজ করে, কিন্তু syntax ছোট এবং cleaner হয়।

5️⃣ What are template literals?
Answer: Template literals হলো JavaScript এ string লেখার একটি আধুনিক পদ্ধতি, যেখানে backtick (``) ব্যবহার করা হয়। এর মাধ্যমে সহজে variable বা expression string এর ভিতরে insert করা যায় ${} ব্যবহার করে।