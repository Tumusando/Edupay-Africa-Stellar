#![no_std]

use soroban_sdk::{contract, contractimpl, contractevent, Env, Address, symbol_short};

#[contract]
pub struct EduPayTuitionContract;

#[contractevent]
pub struct PaymentEvent {
    pub student: Address,
    pub amount: i128,
}

#[contractimpl]
impl EduPayTuitionContract {
    pub fn record_payment(env: Env, student: Address, amount: i128) {
        let topic = symbol_short!("PAYMENT");
        env.events().publish((topic,), (student, amount));
    }
}