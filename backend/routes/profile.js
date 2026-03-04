import express from "express";

const router = express.Router();

// Mock profile data
router.get("/", (req, res) => {
  res.json({
    success: true,
    result: {
      name: "Sandrine TUMUKUNDE",
      email: "tumukundesandrine50@gmail.com",
      stellarAccount: "GDQOEX4A3K7OTYW66PJ4FE3QEAQPDM6SP24LUNN5XQCKDJ4HRIJSOLGB",
    },
  });
});

export default router;