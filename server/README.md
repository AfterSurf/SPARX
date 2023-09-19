## queries: 

query getSinglePhone($phoneId:Int!) {
  phone(id: $phoneId) {
    name
    phone
  }
}

{
  "phoneId": 1
}



query getSinglePhone($phoneNumber: String!) {
  number(phone: $phoneNumber) {
    name
    phone
  }
}

{
  "phoneNumber": "0171/24984023"
}