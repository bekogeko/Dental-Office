import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, Reducer, useReducer, useRef, useState } from "react";
import DashboardLayout from "~/components/dashboardLayout";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { api } from "~/utils/api";
const SearchResult = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={() => onClick()}
      // onClick={() => {
      //   setSelectedPatient(patient.id);
      //   setNextValid(true);
      //   // setSelecionado("undecided");
      // }}
      className="flex flex-col gap-2 rounded-md border border-gray-600 p-2"
    >
      <p>{name}</p>
    </button>
  );
};
const PatientStep = ({
  setNextValid,
  setPatientCreateData,
}: {
  setNextValid: Dispatch<boolean>;
  setPatientCreateData: Dispatch<
    | { name: string; age?: number }
    | {
        selectedId: string;
        selectedName: string;
        selectedAge?: number;
      }
  >;
}) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const [selecionado, setSelecionado] = useState<
    "create" | "search" | "undecided"
  >("undecided");

  const [selectedPatientData, setSelectedPatientData] = useState<
    | {
        id: string;
        name: string;
        age?: number;
      }
    | false
  >(false);

  const [selectedPatientId, setSelectedPatientId] = useState<string | false>(
    false
  );

  const [searchValue, setSearchValue] = useState<string>("");

  const searchQuery = api.Patience.search.useQuery({
    name: searchValue,
  });

  // create patient form
  const createPatient = (
    <div className="col-span-2 flex flex-col border-2 border-black p-2">
      <div className="flex flex-col">
        <label htmlFor="patientName">
          Patient Name <span className="text-red-500">*</span>
        </label>
        <input
          ref={nameInput}
          onChange={() => {
            if (
              nameInput.current?.value &&
              ageInput.current?.value &&
              ageInput.current?.checkValidity()
            ) {
              setNextValid(true);
              setPatientCreateData({
                name: nameInput.current?.value,
                age: +ageInput.current?.value,
              });
            } else {
              setNextValid(false);
            }
          }}
          type="text"
          name="patientName"
          id=""
          className="border-2 border-black p-2"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="patientAge">Patient Age</label>
        <input
          ref={ageInput}
          pattern="[0-9]*"
          onChange={() => {
            if (
              ageInput.current?.value &&
              nameInput.current?.value &&
              ageInput.current?.checkValidity()
            ) {
              setNextValid(true);
              setPatientCreateData({
                name: nameInput.current?.value,
                age: +ageInput.current?.value,
              });
            } else {
              setNextValid(false);
            }
          }}
          type="number"
          name="patientAge"
          id=""
          className="border-2 border-black/70 p-2"
          min={12}
          max={100}
          autoComplete="off"
        />
      </div>
    </div>
  );

  const searchPatient = (
    <div className="col-span-2 flex flex-col gap-2 border border-black p-2">
      {/* if patient create data's selected id isnt null */}
      {selectedPatientId && selectedPatientData && selectedPatientData.name && (
        <button
          className="flex flex-col gap-2"
          onClick={() => {
            setSelectedPatientId(false);
            setNextValid(false);
            setPatientCreateData({ name: "" });
          }}
        >
          <p>Selected Patient</p>
          <div className="flex flex-col gap-2 border-2 border-black p-2">
            <p>{selectedPatientData.name}</p>
            <p>{selectedPatientData.age}</p>
          </div>
        </button>
      )}
      <div className="flex gap-2">
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="search"
          name=""
          id=""
          className="flex-grow rounded-md border-2 border-black p-2"
        />
        <button className="rounded-md bg-gray-300 p-2">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </div>
      {searchQuery.data?.map((patient) => {
        return (
          <SearchResult
            name={patient.name}
            onClick={() => {
              setSelectedPatientId(patient.id);
              setNextValid(true);
              setPatientCreateData({
                selectedId: patient.id,
                selectedName: patient.name,
                selectedAge: patient.age || undefined,
              });
              setSelectedPatientData({
                id: patient.id,
                name: patient.name,
                age: patient.age || undefined,
              });
              // setSelecionado("undecided");
            }}
          />
        );
      })}
    </div>
  );

  return (
    <div className="grid grid-cols-2 gap-2">
      {selecionado === "undecided" && (
        <>
          <button
            onClick={() => {
              setSelecionado("create");
            }}
            className="flex h-72 items-center justify-center rounded-md bg-gray-300 text-black/80 hover:bg-gray-200 hover:text-black"
          >
            Create Patient
          </button>
          <button
            onClick={() => {
              setSelecionado("search");
            }}
            className="flex h-72 items-center justify-center rounded-md bg-gray-300 text-black/80 hover:bg-gray-200 hover:text-black"
          >
            Search Patient
          </button>
        </>
      )}
      {selecionado !== "undecided" && (
        <button
          className="col-start-2 place-self-end rounded-md bg-gray-300 p-2"
          onClick={() => {
            setSelecionado("undecided");
          }}
        >
          Back
        </button>
      )}
      {selecionado === "create" && createPatient}
      {selecionado === "search" && searchPatient}
    </div>
  );
};

const Dashboard = () => {
  type StepperState = {
    currentStep: number;
    steps: React.ReactNode[];
    stepDatas: any[];
  };
  enum StepperActionType {
    next = "next",
    previous = "previous",
    setStep = "setStep",
    setStepData = "setStepData",
  }
  type StepperAction =
    | {
        type: StepperActionType;
        payload?: any;
      }
    | StepperActionType;

  const [nextValid, setNextValid] = useState<boolean>(false);
  const [patientCreateData, setPatientCreateData] = useState<
    | {
        name: string;
        age?: number;
      }
    | {
        selectedId: string;
        selectedName: string;
        selectedAge?: number;
      }
    | false
  >(false);

  function stepperReducer(
    state: StepperState,
    action: StepperAction
  ): StepperState {
    // check if action is a stepper action type
    if (typeof action === "string") {
      action = { type: action };
    }

    switch (action.type) {
      case "next":
        return {
          ...state,
          currentStep: state.currentStep + 1,
        };
      case "previous":
        return {
          ...state,
          currentStep: state.currentStep - 1,
        };
      case "setStep":
        return {
          ...state,
          currentStep: action.payload,
        };
      case "setStepData":
        console.log(action.payload);
        return {
          ...state,
          stepDatas: {
            ...state.stepDatas,
            [state.currentStep]: action.payload,
          },
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer<Reducer<StepperState, StepperAction>>(
    stepperReducer,
    {
      currentStep: 0,
      steps: [
        <PatientStep
          setNextValid={setNextValid}
          setPatientCreateData={setPatientCreateData}
        />,
        <div>hi</div>,
        <div>hi</div>,
      ],
      stepDatas: [],
    }
  );

  const onFinish = () => {};

  return (
    <DashboardLayout className=" flex justify-center p-2">
      <div className="w-9/12">
        <div className="mb-2 flex justify-evenly pt-4">
          {state.steps.map((step, index) => {
            return (
              <div key={index} className={`flex flex-col items-center gap-2`}>
                <div
                  className={`${
                    index === state.currentStep || index < state.currentStep
                      ? "bg-blue-500"
                      : "bg-gray-400"
                  } h-4 w-4 rounded-full`}
                ></div>
                <div className="text-sm">Step {index + 1}</div>
              </div>
            );
          })}
        </div>
        {state.steps[state.currentStep]}
        <div className="mt-2 flex items-center justify-end gap-2">
          {state.currentStep !== 0 && (
            <button
              onClick={() => dispatch(StepperActionType.previous)}
              className="select-none rounded-md border border-blue-500 p-2  text-blue-500"
            >
              Previous
            </button>
          )}
          {state.currentStep !== state.steps.length - 1 && (
            <button
              onClick={() => {
                dispatch({
                  type: StepperActionType.setStepData,
                  payload: patientCreateData,
                });
                dispatch(StepperActionType.next);
              }}
              disabled={!nextValid}
              className="select-none rounded-md bg-blue-500 p-2 font-semibold text-white transition-colors disabled:bg-blue-400"
            >
              Next
            </button>
          )}
          {state.currentStep === state.steps.length - 1 && (
            <button
              onClick={() => onFinish()}
              className="select-none rounded-md bg-blue-500 p-2 font-semibold text-white"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
