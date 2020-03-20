const registerSchema = require("../../model/register");
console.log("hello from controlller");
exports.postUrl = async (req, res) => {
  try {
    const { name, email, password, ipaddress } = req.body;
    let systemDate = new Date();
    let currentDate = systemDate.getDate();
    let currentMonth = systemDate.getMonth() + 1;
    let currentYear = systemDate.getFullYear();
    //  console.log("current", currentDate, currentMonth, currentYear);
    let date = currentDate + "/" + currentMonth + "/" + currentYear;
    // console.log("full date", fullDate);
    let number = await registerSchema
      .find({ ipaddress: ipaddress, date: date })
      .countDocuments();
    console.log("number", number);
    console.log("function is running");
    if (number <= 3) {
      try {
        const item = new registerSchema({
          name,
          email,
          password,
          ipaddress,
          date
        });
        await item.save();
        res.status(201).json(item);
      } catch (err) {
        console.log("err", err);
        res.status(409).json({ Error: "Duplicate Entry" });
      }
    } else {
      var status = req.body.status;
      console.log("status", status);
      if (status == true) {
        try {
          const item = new registerSchema({
            name,
            email,
            password,
            ipaddress,
            date
          });
          await item.save();
          res.status(201).json(item);
        } catch (err) {
          console.log("err", err);
          if (err.code === 11000) {
            res.status(409).json({ Error: "Duplicate Entry" });
          } else {
            res.status(500).json({ Network: "Network Error" });
          }
        }
      } else {
        res.status(302).json({ Status: true });
      }
    }
  } catch (err) {
    res.status(500).json({ Network: "Network Error" });
  }
};
