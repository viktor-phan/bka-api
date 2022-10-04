// SET UP API ORDER START
app.get("/orders", function(req, res){
  Order.find(function(err, foundOrder){
    if(!err){
      res.send(foundOrder);
    }
    else{
      res.send(err);
    }
  });
});

app.post("/orders", function(req, res){
  const newOrder = new Order({
    phoneNumber: req.body.phoneNumber,
    orderDetails: req.body.orderDetails
  });

  newOrder.save(function(err){
    if(!err){
      res.send("Successfully added a new order!");
    }
    else{
      res.send(err);
    }
  });
});
// SET UP API ORDER END
