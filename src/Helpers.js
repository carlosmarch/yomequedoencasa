function storeUniqueTopics(records){
  //store window unique topics
  var topics = records.map(function(item) {return item.fields.temas;})
  const mergeAllTopics = Array.prototype.concat.apply([], topics);
  const uniqueTopics = mergeAllTopics.filter((val,id,array) => array.indexOf(val) === id);

  window.$topics = uniqueTopics; //global variable for the dropdown
  return uniqueTopics
}

function storeUniqueCategories(records){
  //store window unique categories
  var categories = records.map(function(item) {return item.fields.categorias;})
  const mergeAllCategories = Array.prototype.concat.apply([], categories);
  const uniqueCategories = mergeAllCategories.filter((val,id,array) => array.indexOf(val) === id);

  window.$categories = uniqueCategories; //global variable for the dropdown
  return uniqueCategories
}

function getUrlCategory(){
  return decodeURIComponent(window.location.pathname.split("/")[1]);
}


function getUrlTopic(){
  return decodeURIComponent(window.location.pathname.split("/").pop());
}

export {
   storeUniqueTopics,
   storeUniqueCategories,
   getUrlCategory,
   getUrlTopic,
};