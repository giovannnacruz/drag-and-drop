function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  
  function allowDrop2(ev) {
      ev.preventDefault();
    }
   
    function drag2(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
   
    function drop22(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
   
  
   
  function allowDrop3(ev) {
      ev.preventDefault();
    }
   
    function drag3(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
   
    function drop33(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }