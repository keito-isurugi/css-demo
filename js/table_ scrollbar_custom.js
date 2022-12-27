const targetClasses = ['wrapper', 'scrollbar']

for(const targetClass of targetClasses) {
	document.querySelector(`.${targetClass}`).addEventListener('scroll', function () {
  	const otherClass = this.className.includes(targetClasses[0]) ? targetClasses[1] : targetClasses[0];
    console.log(otherClass)
    const left = document.querySelector(`.${targetClass}`).scrollLeft;
    document.querySelector(`.${otherClass}`).scrollTo(left, 0);
  })
}



const targetTableClasses = ['table_wrapper', 'table_scrollbar']

for(const targetTableClass of targetTableClasses) {
	document.querySelector(`.${targetTableClass}`).addEventListener('scroll', function () {
  	const otherClass = this.className.includes(targetTableClasses[0]) ? targetTableClasses[1] : targetTableClasses[0];
    console.log(otherClass)
    const left = document.querySelector(`.${targetTableClass}`).scrollLeft;
    document.querySelector(`.${otherClass}`).scrollTo(left, 0);
  })
}