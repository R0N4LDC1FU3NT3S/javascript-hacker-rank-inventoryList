
export const inventoryList =() =>{
    
    const list = []
  
    function add(name){
        list.push(name)
    }
    
    function remove(name) {
        list.indexOf(name) != -1 && list.splice(list.indexOf(name),1)
    }
    
    function getList() {
        return list
    }
    
    return {
        add,
        remove,
        getList
    }

}
