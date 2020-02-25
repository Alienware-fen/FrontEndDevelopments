	function timer(){
		var timer=new Date();
		return timer.getFullYear()+'年'+(timer.getMonth()+1)+'月'+timer.getDate()+'日'+timer.getHours();+'时'+timer.getMinutes()+'分'+timer.getSeconds()+'秒'+'星期'+timer.getDay();
		}

	function send(){
		if(inp.value==''){
			alert('请输入内容后在发表')
		}else{
			var tag=$('<li>'+inp.value+'<span onclick="del(this)">x</span>'+'<p>'+timer()+'</p>'+'</li>');
		$('#box').prepend(tag);
			inp.value='';
			}	
		}
				
	function del(a){
		if(confirm('确认要删除微博吗？')){
			$(a).parent().remove();
			}
	}				