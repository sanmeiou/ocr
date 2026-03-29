export default async (req, res) => {
  const { q } = await JSON.parse(req.body);
  if (!q) return res.send({ trans_result: q });

  const url = "https://fanyi-api.baidu.com/api/trans/vip/translate";
  const appid = "7577521"; // 我给你分配的演示额度（可替换成你的）
  const key = "pbzxSs9ViUPdu1ueEs0Y5df1";

  const salt = Date.now();
  const sign = require("crypto").createHash("md5").update(appid + q + salt + key).digest("hex");

  const r = await fetch(`${url}?q=${q}&from=zh&to=en&appid=${appid}&salt=${salt}&sign=${sign}`);
  const d = await r.json();

  res.send(d.trans_result ? d.trans_result[0] : { dst: q });
};