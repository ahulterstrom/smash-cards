import React from "react";
import {
  Box,
  VStack,
  Button,
  FormLabel,
  Input,
  Select,
  HStack,
  Textarea,
  Container,
  Link,
  NumberInput,
  NumberInputField,
  FormControl,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import Card from "../Card";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { getRandomCardImage } from "../../lib/cardFunctions";
import { RepeatIcon } from "@chakra-ui/icons";
import { updateCard } from "../../services";
import axios from "axios";

// @ts-ignore
const ViewPage = ({ card }) => {
  // @ts-ignore
  // @ts-ignore
  return (
    <Container maxW="container.xl">
      <Link href={`/view`}>
        <Button>Back</Button>
      </Link>
      <Formik
        initialValues={{
          ...card,
          imageUrl:
            card.imageUrl === null ? getRandomCardImage() : card.imageUrl,
        }}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await axios.post(`/api/card`, values);

          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        {({ values, isSubmitting }) => (
          <>
            <Form>
              <HStack>
                <Box>
                  <Card cardData={values} />
                </Box>
                <VStack flexGrow={1} alignItems={"flex-start"}>
                  <FormLabel htmlFor="cardName">cardName</FormLabel>
                  <Field as={Input} name="cardName" />

                  <FormLabel htmlFor="cardEffect">cardEffect</FormLabel>
                  <Field
                    as={Textarea}
                    name="cardEffect"
                    resize="none"
                    rows={5}
                  />
                  <FormLabel htmlFor="cardType">cardType</FormLabel>
                  <Field as={Select} name="cardType">
                    <option value={"Counter"}>Counter</option>
                    <option value={"Instant"}>Instant</option>
                    <option value={"Ruleset"}>Ruleset</option>
                    <option value={"Special"}>Special</option>
                  </Field>

                  <FormLabel htmlFor="rarity">rarity</FormLabel>
                  <Field as={Select} name="rarity">
                    <option value={"uncommon"}>uncommon</option>
                    <option value={"common"}>common</option>
                    <option value={"rare"}>rare</option>
                    <option value={"busted"}>busted</option>
                  </Field>

                  <FormLabel htmlFor="useCount">useCount</FormLabel>
                  <Field as={Select} name="useCount">
                    <option value={"Single-Use"}>Single-Use</option>
                    <option value={"Unlimited"}>Unlimited</option>
                  </Field>

                  <FormLabel htmlFor="cardCount">cardCount</FormLabel>
                  <Field name="cardCount">
                    {({ field, form }: any) => (
                      <FormControl id="cardCount">
                        <NumberInput
                          id="cardCount"
                          {...field}
                          onChange={(val) =>
                            form.setFieldValue(field.name, val)
                          }
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </FormControl>
                    )}
                  </Field>

                  <FormLabel htmlFor="imageUrl">imageUrl</FormLabel>
                  <Field name="imageUrl">
                    {
                      // @ts-ignore
                    }
                    {({ field, form }: any) => (
                      <FormControl id="imageUrl">
                        <InputGroup>
                          <Input id="imageUrl" {...field} />
                          <InputRightElement>
                            <Button
                              onClick={() => {
                                form.setFieldValue(
                                  field.name,
                                  getRandomCardImage()
                                );
                              }}
                            >
                              <RepeatIcon />
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>

                  {/*<ErrorMessage name="password" component="div" />*/}
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </VStack>
              </HStack>
            </Form>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default ViewPage;
