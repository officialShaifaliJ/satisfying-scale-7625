import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import axios from 'axios';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function SignupCard() {
      const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("");
      const [name, setName] = useState("");
      const [password, setPassword] = useState("");
      
      const handleSubmit=async(e)=>{
          e.preventDefault();
          const checkUserData=axios.get(`https://bigbite-xqp8.onrender.com/users`);
          // const checkUserData = await axios.get(`http://localhost:8080/users`);
        //   console.log("checkUserData",checkUserData)

          let userIsHere=0;
          const userData={"name":name,"email":email,"password":password};

          console.log(userData);
          
          if(name===""||email===""||password===""){
              alert('Please fill All Details 🙏');
              return 
            }else{
                checkUserData.data.forEach((el)=>{
                    console.log(el.email)
                    if(el.email===email||el.name===name){
                        userIsHere=1;
                    }
                })
            }
            if(userIsHere===1||userIsHere>0){
                alert("User already exist 🙎‍♂️");
                return
            }
        //   let resPost=await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`,userData);
          let resPost=await axios.post(`https://bigbite-xqp8.onrender.com/users`,userData);
          alert("🎉 Hurray!⚛Sign Up Successfully 😃✔")
          console.log(resPost);
          window.location.href="/";
    } 
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
          </Stack>
          <Box
          w={'27rem'}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              {/* <HStack> */}
                <Box>
                  <FormControl 
                  id="firstName" 
                  isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text"  
                            value={name}
                            onChange={(e)=>setName(e.target.value)}/>
                  </FormControl>
                </Box>
                {/* <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box> */}
              {/* </HStack> */}
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email}
              onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} 
                  value={password} 
                  onChange={(e)=>setPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link href='/login' color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }