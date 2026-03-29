export default async (req, res) => {
  const API_KEY = "NzB0gbHUNvtLS5FGArJhr2pC";
  const SECRET_KEY = "RQBUjGep2V1W0rXhj0VEiXbDK7GdHrfC";

  const r = await fetch(`https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET_KEY}`);
  const d = await r.json();
  res.send(d.access_token);
};
