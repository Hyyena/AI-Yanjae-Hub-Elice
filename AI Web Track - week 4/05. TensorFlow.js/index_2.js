tf.loadLayersModel("http://localhost:8080/ml/download").then((model) => {
  model.predict(tf.tensor([20])).print();
});
