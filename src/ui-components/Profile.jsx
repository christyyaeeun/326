/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Profile(props) {
  const { user, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      borderRadius="9.614147186279297px"
      padding="26px 0px 26px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...rest}
      {...getOverrideProps(overrides, "Profile")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="308px"
        height="226px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 363")}
      >
        <Flex
          gap="10px"
          position="absolute"
          top="0px"
          left="76px"
          direction="row"
          height="141.25px"
          alignItems="flex-start"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 466")}
        >
          <Image
            width="135px"
            height="135px"
            shrink="0"
            position="relative"
            boxShadow="0px 3.845659017562866px 3.845659017562866px rgba(0, 0, 0, 0.25)"
            borderRadius="153.82635498046875px"
            padding="0px 0px 0px 0px"
            src={user?.profilePicture}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <View
          padding="0px 0px 0px 0px"
          width="308px"
          height="36.45px"
          position="absolute"
          top="146.72px"
          left="0px"
          {...getOverrideProps(overrides, "Group 362")}
        >
          <View
            width="308px"
            height="36.45px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 467")}
          >
            <Text
              fontFamily="Inter"
              fontSize="21.25490951538086px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="32.69565200805664px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="4px"
              left="115px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={user?.username}
              {...getOverrideProps(overrides, "Christy")}
            ></Text>
          </View>
        </View>
        <View
          width="308px"
          height="30.07px"
          position="absolute"
          top="195.93px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 468")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="125.95px"
            height="32.69px"
            position="absolute"
            top="0px"
            left="91px"
            {...getOverrideProps(overrides, "Group 361")}
          >
            <View
              width="127.87px"
              height="34.61px"
              position="absolute"
              top="-0.96px"
              left="-0.96px"
              border="0.9614147543907166px SOLID rgba(239,240,240,1)"
              borderRadius="4.807073771953583px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(133,175,237,1)"
              {...getOverrideProps(overrides, "Button")}
            >
              <Text
                fontFamily="Inter"
                fontSize="13.459806442260742px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="17.305465698242188px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.39px"
                position="absolute"
                top="23.53%"
                bottom="23.53%"
                left="19.08%"
                right="19.08%"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Edit Profile"
                {...getOverrideProps(overrides, "\u270F\uFE0F Button text")}
              ></Text>
            </View>
          </View>
        </View>
      </Flex>
    </Flex>
  );
}
