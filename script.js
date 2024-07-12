function fibonacci(num) {
// your code here
	let a=0
	let b=1
	let ct=3
	if(num==1)
		return 0
	if(num==2)
		return 1
	while(true){
		let c=a+b
		if(ct==num)
			return c
		a=b
		b=c
		ct++
	}
}

module.exports = fibonacci;
