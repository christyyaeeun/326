/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function Entry(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      height="432px"
      overflow="hidden"
      position="relative"
      borderRadius="30px"
      padding="13px 0px 13px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Entry")}
    >
      <View
        width="394px"
        height="394px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1826")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="388px"
          height="345px"
          position="absolute"
          top="41px"
          left="3px"
          {...getOverrideProps(overrides, "Group 367")}
        >
          <View
            width="368px"
            height="41px"
            position="absolute"
            top="calc(50% - 20.5px - 152px)"
            left="calc(50% - 184px - 0px)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 365yxa")}
          >
            <View
              width="360px"
              height="41px"
              position="absolute"
              top="0px"
              left="8px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Title")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="20px"
                fontWeight="500"
                color="rgba(27,43,66,1)"
                lineHeight="23.4375px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="center"
                width="346px"
                position="absolute"
                top="28.3%"
                bottom="28.3%"
                left="1px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Title"
                {...getOverrideProps(overrides, "Titleesk")}
              ></Text>
            </View>
          </View>
          <View
            width="388px"
            height="241px"
            position="absolute"
            top="37px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 365sgg")}
          >
            <Text
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="400"
              color="rgba(63,80,114,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="3.03%"
              bottom="21.21%"
              left="5.15%"
              right="5.15%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum is a dummy text&#xA;used as placeholder"
              {...getOverrideProps(
                overrides,
                "Lorem ipsum is a dummy text used as placeholder"
              )}
            ></Text>
          </View>
          <View
            width="135px"
            height="34px"
            position="absolute"
            top="311px"
            left="22px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 1827")}
          >
            <Button
              display="flex"
              gap="0"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              direction="row"
              width="135px"
              height="34px"
              justifyContent="center"
              alignItems="center"
              borderRadius="4px"
              padding="8px 12px 8px 12px"
              backgroundColor="rgba(181,210,220,1)"
              size="small"
              isDisabled={false}
              variation="primary"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </View>
        </View>
      </View>
    </Flex>
  );
}
