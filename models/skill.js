const skills = [
    {id: 783177, skill: 'Sewing', done: true},
    {id: 754046, skill: 'Express Master', done: false},
    {id: 721863, skill: 'Dancing', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
 