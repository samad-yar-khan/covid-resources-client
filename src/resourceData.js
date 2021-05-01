export const data = {
    categories : [
        "All" , "Medicines" , "Beds" , "Plasma" , "Oxygen"
    ],
    allResources : [
        {
            title:'Oxygen Available',
            description :'Oxygen Avilable in delhi confirmed on 26th',
            categories : ['oxygen' , 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'0',
            verified : true
    
        },
        {
            title:'Oxygen Availabe',
            description :'Oxygen Avilable in delhi confirmed on 26th',
            categories : ['oxygen' , 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id : '1',
            verified : false
            
        },
        {
            title:'Medicine Availabe',
            description :'Injection Avilable in delhi confirmed on 26th',
            categories : [ 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'2',
            verified : true
        },
        {
            title:'Beds Availabe',
            description :'Beds Avilable in delhi confirmed on 26th',
            categories : [ 'beds'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'3',
            verified : true
        },
        {
            title:'BEds Availabe',
            description :'BEds Avilable in delhi confirmed on 26th',
            categories : [ 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'4',
            verified : false
        },
        {
            title:'Medicine Availabe',
            description :'Injection Avilable in delhi confirmed on 26th',
            categories : [ 'medicine' , 'plasma'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'5',
            verified : true
        },
        {
            title:'Plasma Availabe',
            description :'Injection Avilable in delhi confirmed on 26th',
            categories : [ 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'6',
            verified : true
        },
        {
            title:'plasma Availabe',
            description :'Injection Avilable in delhi confirmed on 26th',
            categories : [ 'medicine','plasma'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'7',
            verified : false
        },
        {
            title:'Medicine Availabe',
            description :'Injection Avilable in delhi confirmed on 26th',
            categories : [ 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'8',
            verified:true
        },
    
    ],
    medicine : [
        {
            title:'Medicine Availabe',
            description :'Injection Avilable in delhi confirmed on 26th',
            categories : [ 'medicine' , 'plasma'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'5',
            verified:true
        },
        {
            title:'Medicine Availabe',
            description :'Injection Avilable in delhi confirmed on 26th',
            categories : [ 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'8',
            verified:false
        },
    ],
    beds : [
        {
            title:'Beds Availabe',
            description :'Beds Avilable in delhi confirmed on 26th',
            categories : [ 'beds'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'3',
            verified:true
        },
        {
            title:'BEds Availabe',
            description :'BEds Avilable in delhi confirmed on 26th',
            categories : [ 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'4',
            verified:false
        },
    ],
    plasma : [
        {
            title:'Plasma Availabe',
            description :'Injection Avilable in delhi confirmed on 26th',
            categories : [ 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'6',
            verified:true
        },
        {
            title:'plasma Availabe',
            description :'Injection Avilable in delhi confirmed on 26th',
            categories : [ 'medicine','plasma'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'7',
            verified:false
        }
    ],
    oxygen : [
        {
            title:'Oxygen Availabe',
            description :'Beds Avilable in delhi confirmed on 26th',
            categories : [ 'beds'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'3',
            verified:true
        },
        {
            title:'Cylengers Availabe',
            description :'Cylenders available from 10AM-12AM and 6PM-7PM',
            categories : [ 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'4',
            verified:false
        },
        {
            title:'Cans Availabe',
            description :'BEds Avilable in delhi confirmed on 26th',
            categories : [ 'medicine'],
            date : '25/04/21',
            upvotes : '14',
            downvotes : '3',
            id:'5',
            verified:false
        },
    ],

    
   
}

// const submit = e => {
//     e.preventDefault()
//     fetch('/api', {
//       method: 'POST',
//       body: JSON.stringify({ user }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then(res => res.json())
//       .then(json => setUser(json.user))
//   }