import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: "localhost",
  user: "hapi-server",
  password: "Amit@/6912",
  database: "buy-and-sell",
});

connection.on('error', (err) => {
  console.error('MySQL connection error:', err.message);
});

export const db ={
    connect:()=>connection.connect(),
    query:(queryString, escapedValues)=>
        new Promise((resolve,reject)=>{
            connection.query(queryString, escapedValues, (error,results,fields)=>{
                if(error) return reject(error);
                resolve({results,fields});
            });
        }),
        end:()=>connection.end(),
}
