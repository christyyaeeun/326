/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function Entry1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      height="361px"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,245,245,1)"
      {...rest}
      {...getOverrideProps(overrides, "Entry1")}
    >
      <Flex
        gap="10px"
        direction="column"
        shrink="0"
        height="361px"
        position="relative"
        borderRadius="12px"
        padding="45px 25px 45px 25px"
        {...getOverrideProps(overrides, "e-attempt")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="300px"
          height="271px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 368")}
        >
          <Flex
            gap="36px"
            position="absolute"
            top="0px"
            left="0px"
            direction="column"
            width="300px"
            height="271px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 368")}
          >
            <Flex
              gap="22px"
              direction="column"
              height="201px"
              grow="1"
              basis="201px"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 368opk")}
            >
              <TextField
                display="flex"
                gap="20px"
                direction="column"
                shrink="0"
                alignSelf="stretch"
                objectFit="cover"
                position="relative"
                padding="0px 0px 0px 0px"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                isMultiline={false}
                {...getOverrideProps(overrides, "TextFieldwpa")}
              ></TextField>
              <TextField
                display="flex"
                gap="4px"
                direction="column"
                height="89px"
                grow="1"
                basis="89px"
                alignSelf="stretch"
                objectFit="cover"
                position="relative"
                padding="0px 0px 0px 0px"
                size="large"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                isMultiline={true}
                {...getOverrideProps(overrides, "TextFieldquw")}
              ></TextField>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="135px"
              height="34px"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              borderRadius="4px"
              padding="8px 12px 8px 12px"
              backgroundColor="rgba(161,184,219,1)"
              {...getOverrideProps(overrides, "Button")}
            >
              <Text
                fontFamily="Inter"
                fontSize="17px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="18px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.53px"
                width="111px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Save"
                {...getOverrideProps(overrides, "\u270F\uFE0F Button text")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
