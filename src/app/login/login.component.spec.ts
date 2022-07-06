import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("[SPEC-1]:Login Component is Created", () => {
    setTimeout(expect(component).toBeTruthy(), 90000);
  });

  it("[SPEC-2]:Test Case for propertie Data", () => {
    let uname = component.username;
    expect(uname).toBe("admin");
  });

  it("[SPEC-3]:Test Case for Method ", () => {
    let uname = component.getUserName("Hello");
    expect(uname).toBe("Hello admin");
  });

  it("[SPEC-4]:Test Case for HTMLELEMENT H2 ", () => {
    var ref = fixture.nativeElement;
    console.log(fixture);
    var h2ref = ref.querySelector("h2");
    var h2content = h2ref.textContent;
    //expect(h2content).toBe('Good Morning!');
    expect(h2content).toContain("Good Morning");
  });
  it("[SPEC-5]:Test Case for HTMLELEMENT H3 ", () => {
    var ref = fixture.nativeElement;
    var h3ref = ref.querySelector(".g1");
    var h3content = h3ref.textContent;
    expect(h3content).toBe("Good Afternoon");
  });

  it("[SPEC-6]:Test Case for Form Input To Check Empty Or Not", () => {
    var ref = fixture.nativeElement;
    var unameref=ref.querySelector('#uname');
    console.log(unameref)
    expect(unameref.value).toBe('')
  });

  it("[SPEC-7]:Test Case for Form Input Value UserName", () => {
    var ref = fixture.nativeElement;
    var unameref=ref.querySelector('#uname');
    console.log(unameref);
    unameref.value="admin";
    expect(unameref.value).toEqual('admin')
  });

  it("[SPEC-8]:Test Case for Form Input Value Password", () => {
    var ref = fixture.nativeElement;
    var pwdref=ref.querySelector('#pwd');
    console.log(pwdref);
    pwdref.value="admin123";
    expect(pwdref.value).toEqual('admin123')
  });

  it("[SPEC-9]:Test Case for Form Input Value For UserName & Password", () => {
    var ref = fixture.nativeElement;
    var unameref=ref.querySelector('#uname');
    var pwdref=ref.querySelector('#pwd');
    unameref.value="admin";
    pwdref.value="admin123";
    expect(unameref.value).toEqual('admin')
    expect(pwdref.value).toEqual('admin123')

  });

});
