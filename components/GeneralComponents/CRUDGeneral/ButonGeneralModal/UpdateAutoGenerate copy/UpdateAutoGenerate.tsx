import Inputs from '@/components/inputs/Inputs';
import { selectRoadMap } from '@/redux/features/RoadMaps/roadmapsSlice';
import { selectRoots } from '@/redux/features/roots/rootsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { rulesType, rulesWordStartStatus } from '@/services/formaterInputs.services';
import { rulesWords } from '@/services/rulesInputs.sevices';

import React, { useEffect, useState, useMemo } from 'react';

const UpdateAutoGenerate = (props: any) => {
    const { modulesName } = props;

    const dispatch = useAppDispatch();
    const roadMap = useAppSelector(selectRoadMap);
    const { col_structure } = useAppSelector(selectRoots);

    const {
        createDataStart,
        dataRoadMapIdData,
    } = roadMap;

    const [processedData, setProcessedData] = useState<any[]>([]);

    // Preprocesar los datos de dataRoadMapIdData y almacenarlos en el estado
    useEffect(() => {
        if (dataRoadMapIdData) {
            const newData = dataRoadMapIdData.map((item: any) => {
                const processedItem = Object.keys(item).reduce((acc: any, key: string) => {
                    acc[key] = {
                        value: item[key],
                        // type: getType(item[key])
                        type: rulesWords(key)
                    };
                    return acc;
                }, {});
                return {
                    ...item,
                    processedItem
                };
            });
            setProcessedData(newData);
        }
    }, [dataRoadMapIdData]);

    // Memorizar la estructura de datos procesados
    const dataTodo = useMemo(() => {
        if (modulesName && col_structure) {
            return modulesName.map((item: any) =>
            col_structure.find((obj: any) => obj.table_fullname === item)
            );
        }
        return [];
    }, [modulesName, col_structure]);
    console.log("🚀 ~ dataTodo ~ dataTodo:", dataTodo)

    const [data, setData] = useState<any | any[] | undefined>();


// un map que plasma inputs
//condición If (si el finlal de la key es Id) es un Select   ejemplo vacancyId  
//busca en un arból de key:nameModule[array] require formato para select o tabla 


    return (
        <div>
            select value <br />
            inputs de roadMap <br />
            {processedData && processedData.map((item: any) => (
                <div key={item.id}>
                    {item && Object.keys(item.processedItem)?.map((key: string) => (
                        <div key={key}>
                            <h5>{key}</h5>
                            <Inputs
                                defaultValue={item.processedItem[key].value}
                                data={data}
                                setData={setData}
                                placeholder={item.processedItem[key].value}
                                name={key}
                                type={item.processedItem[key].type || 'text'}
                                minLength={''}
                                autoFocus={false}
                                color={''}
                                disabled={false}
                                fullWidth={false}
                                id={''}
                                inputComponent={undefined}
                                multiline={false}
                                label={''}
                                rows={''}
                            />
                            {item.processedItem[key].type}
                        </div>
                    ))}
                </div>
            ))}
            interviews... map()<br />
        </div>
    );
}

export default UpdateAutoGenerate;