import { Button, ButtonGroup } from "@chakra-ui/button";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Heading, VStack } from "@chakra-ui/layout";
import { Outlet, useNavigate } from "react-router-dom";

const Section = () => {
  const navigate = useNavigate();
  return (
    <VStack spacing={7}>
      <ButtonGroup colorScheme="blue">
        <Button
          leftIcon={<ArrowLeftIcon />}
          onClick={() => navigate("/pageOne")}
        >
          Page 1
        </Button>
        <Button
          rightIcon={<ArrowRightIcon />}
          onClick={() => navigate("/pageTwo")}
        >
          Page 2
        </Button>
      </ButtonGroup>
      <Heading>
        Page <ArrowDownIcon />
      </Heading>
      <Outlet />
    </VStack>
  );
};

export default Section;
