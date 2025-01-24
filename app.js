const fs = require('fs');
const express = require('express');
// const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErorrHandler = require('./controllers/errorController');

const app = express();

//1) MIDDLEWARES
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// app.use(morgan('dev'));

// app.use((req, res, next) => {
//   console.log('hello from middleware 👋');
//   next();
// });

// app.get(`/api/v1/tours`, getAllTours);
// app.post(`/api/v1/tours`, createTour);
// app.get(`/api/v1/tours/:id`, getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.all('*', (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find ${req.originalUrl} on this server!`
  // });

  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.statusCode = 404;
  // err.status = 'fail';
  // next(err);

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErorrHandler);
module.exports = app;
