// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

/* Here you code */
const browse = (req, res) => {
  if (req.query.q != null) {
    const filteredcategories = categories.filter((program) =>
      program.synopsis.includes(req.query.q)
    );

    res.json(filteredcategories);
  } else {
    res.json(categories);
  }
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const program = categories.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

module.exports = {
  browse,
  read,
  /* Here you export */
};
