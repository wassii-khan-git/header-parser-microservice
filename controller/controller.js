// date controller
export const WhoamiController = async (req, res) => {
  try {
    const { ip } = req;
    const languages = req.headers["accept-language"];
    const software = req.headers["user-agent"];

    if (!ip || !languages || !software) {
      return res.send({
        error: "The ip or languages or software are not present",
      });
    }

    // get the date from params
    res.send({ ipaddress: ip, languages, software });
  } catch (error) {
    console.log(error);
    return res.send({ error: error.message });
  }
};
