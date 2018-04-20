const axios = require("axios");

module.exports = {
  getFamily: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_families()
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  },
  removeFamily: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .remove_family([id])
      .then(response => res.status(200).send(response))
      .catch(console.log);
    // .catch(() => res.status(500).send());
  },
  submitFamily: (req, res, next) => {
    console.log(req.user);
    const dbInstance = req.app.get("db");
    const { userid } = req.user;
    const { name, address1, address2, city, stateName, zip } = req.body;

    console.log(req.body);

    dbInstance
      .add_family([name, address1, address2, city, stateName, zip, userid])
      .then(response => res.status(200).json(response))
      .catch(console.log);
  },

  getPerson: (req, res, next) => {
    const { familyid } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_person([familyid])
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  },

  removePerson: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .remove_person()
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  },

  submitPerson: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const {
      firstName,
      lastName,
      role,
      birthday,
      work,
      income,
      race,
      ethnicity,
      firstChild,
      education,
      record,
      familyId
    } = req.body;

    console.log(req.body);

    dbInstance
      .add_person([
        firstName,
        lastName,
        role,
        birthday,
        work,
        income,
        race,
        ethnicity,
        firstChild,
        education,
        record,
        familyId
      ])
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(console.log);
  },

  getNotes: (req, res, next) => {
    const { familyid } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_notes([familyid])
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  },

  removeNotes: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .remove_notes()
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  },

  submitCaseNotes: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { familyId, date, notes } = req.body;

    dbInstance
      .add_notes([familyId, date, notes])
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(console.log);
  },

  getDemo: (req, res, next) => {
    const { familyid } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_demo([familyid])
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  },

  removeDemo: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .remove_demo()
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  },

  submitDemo: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { hud, snap, wic, tanf, familyId } = req.body;

    console.log(req.body);

    dbInstance
      .add_demo([hud, snap, wic, tanf, familyId])
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(console.log);
  }
};
