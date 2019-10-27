import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import {NavigationParams} from 'library/common/commonTypes/navigation';
import TextWithLabel from 'library/common/commonComponents/TextWithLabel';
import SelectWithSearch, {
  SelectItem,
} from 'library/common/commonComponents/SelectWithSearch';
import Input from 'library/common/commonComponents/Inputs/Input';
import SubHeader from 'library/common/commonComponents/SubHeader';
import Button from 'library/common/commonComponents/Buttons/Button';
import useSampleDetail from './sampleDetailHooks/useSampleDetail';
import Screen from 'library/common/commonComponents/Screen';

import styles from './sampleDetailStyles';
import {GET_CROPS} from 'library/api/samples';
import {getDateForSample} from 'library/utilities/date';

interface SampleDetailProps {
  navigation: NavigationParams;
}

type Pathogen = {
  uuid: string;
  name: string;
};

export default function SampleDetail({navigation}: SampleDetailProps) {
  const sample = (navigation.state.params || {}).sample || {};
  const {
    cropSearchValue,
    setCropSearchValue,
    setActiveCrop,
    location,
    setLocation,
    makeSampleEditing,
    locationError,
    cropSearchValueError,
    pathogens,
    selectedPathogens,
    addPathogen,
    setPathogenText,
    setPathogen,
    setPathogens,
  } = useSampleDetail(sample);

  const [crops, setCrops] = useState([]);
  const {data} = useQuery(GET_CROPS);
  useEffect(
    updateActiveCrop({
      data,
      setCrops,
      sample,
      setCropSearchValue,
      setActiveCrop,
    }),
    [data],
  );

  useEffect(updatePathogens({data, pathogens, sample, setPathogens}), [
    pathogens,
  ]);

  return (
    <Screen>
      <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
        <ScrollView contentContainerStyle={styles.screenInner}>
          <GoBackButton>Sample Detail</GoBackButton>
          <Text style={styles.description}>
            You can edit the sample details untill sample is in process
          </Text>

          <View style={styles.textWithLabelContainer}>
            <TextWithLabel label='Sample #' text={sample.uuid} />
            <TextWithLabel
              label='Date of Sampling'
              text={getDateForSample(sample.created)}
            />
          </View>

          <View style={{zIndex: 101}}>
            <SelectWithSearch
              label='Crop'
              items={crops}
              value={cropSearchValue}
              setValue={setCropSearchValue}
              setActiveItem={setActiveCrop}
              error={cropSearchValueError}
            />
          </View>

          <Input
            label='Sampling Location'
            value={location}
            onChange={setLocation}
            theme='dark'
            style={styles.input}
            error={locationError}
          />

          <SubHeader>Suspected Diseases</SubHeader>

          {selectedPathogens.map((pathogen: SelectItem, index: number) => (
            <View key={index} style={{zIndex: 100 - index}}>
              <SelectWithSearch
                label='Pathogen'
                items={pathogens}
                value={pathogen.text}
                setValue={(text: string) => setPathogenText(index, text)}
                setActiveItem={(newPathogen: SelectItem) =>
                  setPathogen(index, newPathogen)
                }
              />
            </View>
          ))}

          <Text style={styles.addMore} onPress={addPathogen}>
            Add more
          </Text>
          <Button onClick={makeSampleEditing} style={styles.button}>
            Edit sample
          </Button>
        </ScrollView>
      </KeyboardAwareScrollView>
    </Screen>
  );
}

export function updatePathogens({
  data,
  pathogens,
  sample,
  setPathogens,
}: {
  data: any;
  pathogens: Pathogen[];
  sample: any;
  setPathogens: (newPathogens: SelectItem[]) => void;
}) {
  return () => {
    if (
      data &&
      data.crops &&
      pathogens.length > 0 &&
      sample.diseases &&
      sample.diseases.length > 0
    ) {
      setPathogens(
        sample.diseases
          .map((disease: string) => {
            const pathogen: Pathogen | undefined = pathogens.find(
              (el: Pathogen) => el.uuid === disease,
            );

            if (pathogen) {
              return {...pathogen, text: pathogen.name};
            } else {
              return null;
            }
          })
          .filter((pathogen: Pathogen | null) => pathogen !== null),
      );
    }
  };
}

export function updateActiveCrop({
  data,
  setCrops,
  sample,
  setCropSearchValue,
  setActiveCrop,
}: {
  data: any;
  setCrops: React.Dispatch<React.SetStateAction<never[]>>;
  sample: any;
  setCropSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setActiveCrop: React.Dispatch<React.SetStateAction<SelectItem | null>>;
}) {
  return () => {
    if (data && data.crops) {
      setCrops(data.crops.map((crop: any) => ({...crop, text: crop.name})));

      if (sample.crop) {
        const newCrop = data.crops.find(
          (crop: SelectItem) => crop.uuid === sample.crop,
        );
        if (newCrop) {
          setCropSearchValue(newCrop.name);
          setActiveCrop(newCrop);
        }
      }
    }
  };
}
