function addTask(){

	if(task.value.trim() != ''){
		let listItem = document.createElement('li') ;
	listItem.appendChild(document.createTextNode(task.value));
	taskList.appendChild(listItem);
	//taskList.innerHTML += '<li>' + task.value +'</li>';
	$(listItem).on('swiperight', function(){
		//$(this).toggleClass('task-done');

		if(listItem.className.indexOf('task-done') == -1){
			listItem.className += ' task-done';
		}
		else{
			listItem.className = listItem.className.replace(' task-done', '');

		}
		
		});
	$(listItem).on('swipeleft', function(){

		let deleteDirectly = true;
		if(listItem.className.indexOf('task-done') == -1){
			deleteDirectly = confirm('Tache non terminée. Voulez vous la supprimer?');

		}
		if(deleteDirectly){
			$(listItem).hide('slow', function(){
			listItem.remove();
		});
		}	
	});
	task.value ='';
	task.focus();
	$(taskList).listview('refresh');

	}
	
}