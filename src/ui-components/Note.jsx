/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Note(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="605px"
      height="340px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Note")}
    >
      <Flex
        gap="30px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        direction="column"
        boxShadow="-3px 5px 10px rgba(0, 0, 0, 0.25)"
        borderRadius="30px"
        padding="30px 30px 30px 30px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Notes")}
      >
        <Flex
          gap="0"
          direction="column"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title")}
        >
          <Flex
            gap="40px"
            direction="row"
            width="fit-content"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="20px 15px 20px 15px"
            {...getOverrideProps(overrides, "Titlehue")}
          ></Flex>
        </Flex>
        <Flex
          gap="40px"
          direction="column"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Sections")}
        >
          <Flex
            gap="6px"
            direction="column"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Sub Section")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="fit-content"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 15px 0px 15px"
              {...getOverrideProps(overrides, "Subtitle")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="36px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="56px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="515px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Subtitle"
                {...getOverrideProps(overrides, "Subtitlexdu")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="fit-content"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 15px 0px 15px"
              {...getOverrideProps(overrides, "Paragraph")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="32px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
                lineHeight="48px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="515px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum is a dummy text&#xA;used as placeholder"
                {...getOverrideProps(
                  overrides,
                  "Lorem ipsum is a dummy text used as placeholder"
                )}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
