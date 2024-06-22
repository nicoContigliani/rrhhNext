import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Checkbox, Divider } from 'antd';
import type { CheckboxProps } from 'antd';
import { reaactLocalStoraSimple, readLocalStorage, writedLocalStorage } from '@/services/storage.services';
import styles from './SettingGeneral.module.css'

const CheckboxGroup = Checkbox.Group;

const SettingGeneral = (props: any) => {
    const {
        settingData,
        columnSelectElement,
        setColumnSelectElement,
        nameModelStart,
    } = props;

    const [plainOptions, setPlainOptions] = useState<any[]>(settingData || []);
    const [defaultCheckedList, setDefaultCheckedList] = useState<any[]>(columnSelectElement || []);
    const [checkedList, setCheckedList] = useState<string[]>(defaultCheckedList);

    useLayoutEffect(() => {
        const fetchData = async () => {
            try {
                setPlainOptions(settingData);
                setDefaultCheckedList(columnSelectElement);
                setCheckedList(columnSelectElement);
            } catch (error) {
                console.log("🚀 ~ fetchData ~ error:", error);
            }
        };

        fetchData();
    }, [nameModelStart, settingData, columnSelectElement]);

    useEffect(() => {
        writedLocalStorage({ [nameModelStart]: checkedList });
    }, [checkedList, nameModelStart]);

    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

    const onChange = (list: string[]) => {
        setCheckedList(list);
        setColumnSelectElement(list);
    };

    const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
        const newCheckedList = e.target.checked ? plainOptions : [];
        setCheckedList(newCheckedList);
        setColumnSelectElement(newCheckedList);
    };

    return (
        <>
            <div className={styles.body}>
                <h3>{nameModelStart}</h3>
                <div className={styles.checkall}>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        Check all
                    </Checkbox>
                </div>
                <div
                // className={styles.bodyElements}
                className={styles.checkElement}
                >
                    <CheckboxGroup className={styles.bodyElements} options={plainOptions} value={checkedList} onChange={onChange} />
                </div>
            </div>
        </>
    );
};

export default SettingGeneral;
