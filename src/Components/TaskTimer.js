import { Card, Input, Button, Modal } from "antd";
import React, { useState, useEffect } from "react";
import "./TaskTimer.css";

function TaskTimer() {
    const [isTracking, setIsTracking] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [taskName, setTaskName] = useState('');
    const [taskHistory, setTaskHistory] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        let timer;

        if (isTracking) {
            if (!startTime) {
                setStartTime(Date.now());
            }

            timer = setInterval(() => {
                setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isTracking, startTime]);

    const handleStart = () => {
        if (!taskName) {
            showWarningModal();
            return;
        }

        setIsTracking(true);
        setElapsedTime(0);
    };

    const handleStop = () => {
        setIsTracking(false);
        if (taskName) {
            setTaskHistory([...taskHistory, { name: taskName, duration: elapsedTime }]);
            setTaskName('');
        }
        setElapsedTime(0);
        setStartTime(null);
    };

    const showWarningModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleInputFocus = () => {
        console.log("Input focused");
    };

    const handleInputBlur = () => {
        console.log("Input blurred");
    };

    const handleKeyDown = (e) => {
        console.log("Key pressed:", e.key);
    };

    const handleMouseEnterButton = (buttonType) => {
        console.log(`${buttonType} button hovered`);
    };

    const handleMouseLeaveButton = (buttonType) => {
        console.log(`${buttonType} button left`);
    };

    return (
        <div className="tasktimer-container">
            <Card className="tasktimer-card" title="Time Tracking">
                <Input
                    className="tasktimer-input"
                    placeholder="Enter Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyDown}
                />
                <div className="tasktimer-button-container">
                    {isTracking ? (
                        <Button
                            className="tasktimer-stopButton"
                            onClick={handleStop}
                            danger
                            onMouseEnter={() => handleMouseEnterButton("Stop")}
                            onMouseLeave={() => handleMouseLeaveButton("Stop")}
                        >
                            Stop
                        </Button>
                    ) : (
                        <Button
                            className="tasktimer-startButton"
                            onClick={handleStart}
                            onMouseEnter={() => handleMouseEnterButton("Start")}
                            onMouseLeave={() => handleMouseLeaveButton("Start")}
                        >
                            Start
                        </Button>
                    )}
                </div>
                <div className="tasktimer-elapsed-time">Elapsed Time: {elapsedTime} seconds</div>
                           
            </Card>
            <div>
            {taskHistory.length > 0 && (
                                <>
                                    <h3 className="tasktimer-history-title">Task History</h3>
                                    <table className="tasktimer-history-table">
                                        <thead>
                                            <tr>
                                                <th>Task Name</th>
                                                <th>Duration (seconds)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {taskHistory.map((task, index) => (
                                                <tr key={index} className="tasktimer-history-row">
                                                    <td>{task.name}</td>
                                                    <td>{task.duration}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </>
                            )}
            </div>
            <Modal
                title="Warning"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleOk}
                okText="OK"
                className="tasktimer-modal"
            >
                <p>Please enter a task name before starting the tracker.</p>
            </Modal>
        </div>
    );
}

export default TaskTimer;
