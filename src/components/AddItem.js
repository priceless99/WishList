import React from 'react';
import { v4 } from 'uuid';

let i = 0; 

class AddItem extends React.Component {

    constructor (props) {
        super (props)

    
        this.state = {
            input: '',
            Acounter: 0,
            Wcounter: 0,
            items: [],
            message: '',
            wishItems: [],
        }
    console.log(this.state)

    };

    Add(e){
        e.preventDefault();
        const {items} = this.state;
        // items = keyIndex(items, 1);
        const newItem = this.newItem.value ;
        i++;
       

        const onList = items.includes(newItem);  

        if(onList) {
            this.setState({
                message: 'On list already fool'
            })

        } else {
            newItem !== '' && this.setState({
                items: [...this.state.items, newItem],
                message: '',
                Acounter: this.state.Acounter +1,
            })
        }
        console.log(items, i)

       

        this.addForm.reset()

    
    }

    WishList(item) {  //item we want to move

        const wishItems  = this.state.items.filter(newItem => {    // taking the old state and filtering the items, and comparing the items themself with the item we wish to move
            return newItem !== item;  // keeping all the old items and just taking the one we selected
        })

        
            this.setState({
                items: [...wishItems],
                wishItems: [...wishItems, item],   // adding the item to the wishItems array
                Wcounter: this.state.Wcounter +1,
            })
            console.log(wishItems)
            
    }



   render() {
    const {items, message, wishItems, Acounter, Wcounter} = this.state;


       return (
           <div>
           <div>Available Items {Acounter}</div>
           <div>
               {
                   this.message !== '' && <p>{message}</p>  
               }
               <form ref={input => this.addForm = input} onSubmit={(e) => {this.Add(e)}} >
                <input ref={input => this.newItem = input} type='text'  ></input>
                <button type="submit">Add to Available</button>
                <br></br>
                {items.map((item) => {
                    return <div key={item}>
                                {item}
                                <button onClick={(e)=> this.WishList(item)}>Add to Wish List</button>
                             </div>

                })}
                <br></br>
                </form>
           </div>
           <div>My Wish List {Wcounter}</div>
           <br></br>
           {wishItems.map((item) => {
               return <div key={item}>
                   {item}
                   <button onClick={(e)=> this.returnItem(item)}>Remove from WishList</button>
                   </div>     
           })}
           {/* {wishItems} */}
           </div>
       )
   }

}

export default AddItem;