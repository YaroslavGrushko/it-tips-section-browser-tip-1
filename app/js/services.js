const validateSentence = (text, word) => {
	const result = text.includes(word);
	
	if(result){
		return 'Вірно';
	}else{
		return 'Не вірно';
	}
}