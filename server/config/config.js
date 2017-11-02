var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
  process.env.PORT = 3000;
  dbConnect = 'mongodb://localhost:27017/todoApp';

}else if(env === 'test' ){
  dbConnect = 'mongodb://localhost:27017/todoAppTest';
}
